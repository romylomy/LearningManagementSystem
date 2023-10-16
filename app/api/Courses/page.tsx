import {auth} from "@clerk/nextjs"
import {NextResponse} from "next/server"; 
import {db} from "@/lib/db"; 

export async function POST(
    req: Request,
){
    try{
        const { userId} = auth(); 
        const {title} = await req.json();

        if (!userId){
            return new NextResponse("Unauthorized", {status:401});
        }
    
        // creating course base on prisma schema to be added into the database userId and Title because it is required 
        const course = await db.course.create({
            data:{
                userId,
                title, 

            }
        }); 

        return NextResponse.json(course); 

    } catch (error){
        console.log("[COURSES]", error);
        return new NextResponse("Internal Error", {status:500}); 
    }
}