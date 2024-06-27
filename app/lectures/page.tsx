import ListLecture from "@/components/listLecture";
import db from "@/lib/db";

async function getLectures(){
    const lectures = await db.lecture.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
            video: true,
            audio: true,
            created_at: true,
            updated_at: true,
        }
    })
    return lectures;
}

export default async function lectures(){
    const lectures = await getLectures();
    return <div className="flex flex-col gap-1">
        {lectures.map(lecture => (
            <ListLecture key={lecture.id} {...lecture}/>
        ))}
    </div>
}