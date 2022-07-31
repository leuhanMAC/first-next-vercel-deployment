import Link from "next/link"
import { useRouter } from "next/router";

interface props {
    href: string;
    text: string;
}

const style = {
    color: '#0070f3',
    textDecoration: 'underline',
}

export const ActiveLink = ({href, text}:props) =>  {

    const { asPath } = useRouter();

    return (
    <Link href={href}>
        <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )}
