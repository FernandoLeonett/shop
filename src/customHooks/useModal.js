import { useState } from "react";

export default function useModal(initial) {
  const [isOpen, setIsOpen] = useState(initial);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return [isOpen, open, close];
}
