type WhatsAppButtonProps = {
  href: string;
  label: string;
  className?: string;
  floating?: boolean;
};

export function WhatsAppButton({
  href,
  label,
  className = "",
  floating = false,
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-3 rounded-full font-semibold transition duration-300 hover:-translate-y-1 ${
        floating
          ? "fixed bottom-6 right-6 z-50 h-16 w-16 animate-[pulseGlow_3s_ease-in-out_infinite] bg-[#25d366] text-[#052814] shadow-[0_18px_40px_rgba(37,211,102,0.45)]"
          : "bg-[#25d366] px-6 py-3 text-[#052814] shadow-[0_16px_30px_rgba(37,211,102,0.25)]"
      } ${className}`}
    >
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        className={floating ? "h-7 w-7" : "h-5 w-5"}
        fill="currentColor"
      >
        <path d="M19.11 17.3c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.18-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.81c.14.18 1.9 2.91 4.61 4.08.64.28 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32Z" />
        <path d="M16.02 3.2c-7.03 0-12.73 5.71-12.73 12.73 0 2.24.59 4.43 1.71 6.35L3.2 28.8l6.69-1.76a12.7 12.7 0 0 0 6.12 1.56h.01c7.02 0 12.73-5.71 12.73-12.73S23.05 3.2 16.02 3.2Zm0 23.24h-.01a10.5 10.5 0 0 1-5.34-1.46l-.38-.22-3.97 1.04 1.06-3.87-.25-.4a10.54 10.54 0 1 1 8.89 4.91Z" />
      </svg>
      {!floating && <span>{label}</span>}
    </a>
  );
}