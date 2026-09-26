import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type NameGateProps = {
  visible: boolean;
  onSubmit: (name: string) => void;
};

export default function NameGate({ visible, onSubmit }: NameGateProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
  };

  return (
    <div className={`name-gate ${visible ? "" : "name-gate-hidden"}`} aria-hidden={!visible}>
      <form className="name-gate-card" onSubmit={handleSubmit}>
        <p className="kicker">Selamat datang</p>
        <h2>Siapa nama kamu?</h2>
        <p className="name-gate-note">
          Boleh kasih tau nama kamu? Nanti kalau nulis komentar di bawah, namanya kepake otomatis.
        </p>
        <input
          type="text"
          name="visitor-name"
          placeholder="Nama kamu"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          maxLength={40}
          autoFocus
          required
        />
        <button className="button button-primary" type="submit">
          Lanjut ke portfolio <ArrowUpRight size={17} />
        </button>
      </form>
    </div>
  );
}