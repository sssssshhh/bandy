import Link from "next/link";

interface ListLectureProps {
    id: number,
    title: string,
    description: string,
    price: GLfloat, // TODO float doesnt work?
    video: string,
    audio: string,
    created_at: Date,
    updated_at: Date,
}

export default function ListLecture({
    id,
    title,
    description,
    price,
    video,
    audio,
    created_at,
    updated_at,}: ListLectureProps){
    return <Link href={`/lectures/${id}`}>
        <span>{title}</span>
        <span>{description}</span>
        <span>{price}</span>
        <span>{video}</span>
        <span>{audio}</span>
    </Link>
}