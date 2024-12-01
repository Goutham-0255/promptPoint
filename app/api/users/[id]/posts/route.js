import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        console.log('Fetching prompts for creator:', params.id); // Log the creator ID

        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');

        console.log('Fetched prompts:', prompts); // Log the fetched prompts

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error('Error fetching prompts:', error); // Log the error
        return new Response("Failed to fetch all Prompts", { status: 500 });
    }
};