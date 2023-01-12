import Link from "next/link";

export default function NoteLayout({children}:
    {
        children:React.ReactNode;
    }
    ) {
    return (
        <div>
            {children}
        </div>
    )
}  