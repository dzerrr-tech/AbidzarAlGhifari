import { useEffect, useState, type FormEvent } from "react";
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { MessageCircle, Send } from "lucide-react";
import { db } from "@/lib/firebase";

type CommentDoc = {
  id: string;
  name: string;
  message: string;
  createdAt: Timestamp | null;
};

type CommentsProps = {
  visitorName: string;
  onChangeName: () => void;
};

function formatTime(timestamp: Timestamp | null) {
  if (!timestamp) return "Baru saja";
  return timestamp.toDate().toLocaleString("id-ID", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Comments({ visitorName, onChangeName }: CommentsProps) {
  const [comments, setComments] = useState<CommentDoc[]>([]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const commentsQuery = query(
      collection(db, "comments"),
      orderBy("createdAt", "desc"),
      limit(50),
    );
    const unsubscribe = onSnapshot(
      commentsQuery,
      (snapshot) => {
        setComments(
          snapshot.docs.map((doc) => {
            const data = doc.data() as {
              name?: string;
              message?: string;
              createdAt?: Timestamp;
            };
            return {
              id: doc.id,
              name: data.name ?? "Anonim",
              message: data.message ?? "",
              createdAt: data.createdAt ?? null,
            };
          }),
        );
      },
      () => setError("Gagal memuat komentar."),
    );
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = message.trim();
    if (!trimmed || submitting) return;

    setSubmitting(true);
    setError(null);
    try {
      await addDoc(collection(db, "comments"), {
        name: visitorName,
        message: trimmed,
        createdAt: serverTimestamp(),
      });
      setMessage("");
    } catch {
      setError("Komentar gagal terkirim, coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="comments" className="section comments-section">
      <div className="section-label">06 / Guestbook</div>
      <div className="comments-heading" data-reveal>
        <div>
          <p className="kicker">Tinggalkan jejak</p>
          <h2>
            Mampir? Tulis
            <br />
            <span>sepatah dua patah kata.</span>
          </h2>
        </div>
        <p className="comments-identity">
          Komentar sebagai <strong>{visitorName}</strong> ·{" "}
          <button type="button" className="comments-change-name" onClick={onChangeName}>
            ganti nama
          </button>
        </p>
      </div>

      <form className="comment-form" data-reveal onSubmit={handleSubmit}>
        <textarea
          rows={3}
          placeholder="Tulis komentar kamu di sini..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          maxLength={500}
          required
        />
        <button className="button button-primary" type="submit" disabled={submitting}>
          {submitting ? "Mengirim..." : "Kirim komentar"} <Send size={16} />
        </button>
        {error && <p className="form-note form-note-error">{error}</p>}
      </form>

      <div className="comment-list" data-reveal>
        {comments.length === 0 ? (
          <p className="comment-empty">
            <MessageCircle size={16} /> Belum ada komentar. Jadi yang pertama!
          </p>
        ) : (
          comments.map((comment) => (
            <article className="comment-item" key={comment.id}>
              <div className="comment-avatar">{comment.name.charAt(0).toUpperCase()}</div>
              <div className="comment-body">
                <div className="comment-meta">
                  <strong>{comment.name}</strong>
                  <span>{formatTime(comment.createdAt)}</span>
                </div>
                <p>{comment.message}</p>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}