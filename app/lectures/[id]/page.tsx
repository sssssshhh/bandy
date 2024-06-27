import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound } from "next/navigation";

async function getLecture(id: number) {
    const lecture = await db.lecture.findUnique({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            firstname: true,
            lastname: true,
            avatar: true,
          },
        },
      },
    });
    return lecture;
  }

async function getOwner(userId: number){
    const session = await getSession();
    
    if(session.id) {
       return session.id === userId 
    } else {
        return false
    }
}

export default async function lectureDeatil({params,}: {
    params: {id: number}
}){
    const id = Number(params.id);
    if(isNaN(id)){
        return notFound()
    }

    const lecture = await getLecture(id);
    if(!lecture){
        return notFound();
    }

    const owner = await getOwner(lecture.userId);
    // TODO: 구매버튼 표시 제어
}