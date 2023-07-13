import { SERVFAIL } from "dns";

export class Server {
    port: number;

    constructor() { this.port = 3000 }

    serve(): void {
        const server = Bun.serve({
            development: true,
            port: this.port,
            fetch(request) {
                const url = new URL(request.url);
                if (url.pathname === "/") return new Response(`Home page!`);
                if (url.pathname === "/create_account") return this.postCreateAccount();
                if (url.pathname === "/login") return this.postLogin();
                if (url.pathname === "/create_thread") return this.postNewThread();
                if (url.pathname === "/create_comment") return this.postNewComment();
                if (url.pathname === "/threads") return this.getThreads();
                if (url.pathname === "/thread") return this.getThread();
                return new Response(`404!`);
            },
        });

        console.log(`Listening on localhost:${server.port}`);
    }

    postCreateAccount(request: PostCreateAccountRequest): Response {
        // 1. Enter username/password into db
        // 2. Return 200-OK
        return new Response("Hello, World!");
    }

    postLogin(request: PostLoginRequest): Response {
        // 1. Lookup username/password in db
        // 2. If not exist return 404 or something
        // 3. If does exist create new auth-token in db
        // 4. Respond with 200-Ok + auth-token
        let token: PostLoginResponse = { auth_token: "abcd" };
        return new Response(JSON.stringify(token), { status: 200 });
    }

    postNewThread(request: PostNewThreadRequest): Response {
        // 1. Lookup auth-token  in db
        // 2. If valid write the post to the db
        // 3. Respond with 200-Ok
        return new Response(null, { status: 200 });
    }

    postNewComment(request: PostNewCommentRequest): Response {
        // 1. Validate auth-token in db
        // 2. Write the comment to the db
        // 3. Respond with 200-Ok
        return new Response(null, { status: 200 });
    }

    getThreads(): Response {
        // 1. Query db for all titles and authors of last 10 threads
        // 2. Send back as a big list
        let threads: GetThreadsResponse = {
            threads: [
                {
                    id: "aaa",
                    poster_id: "aaab",
                    title: "New Post!",
                    created_date: "1"
                }
            ]
        }
        return new Response(JSON.stringify(threads), { status: 200 });
    }

    getThread(): Response {
        // 1. Query db for all comments on thread
        // 2. Send back as big list
        let comments: GetThreadResponse = {
            comments: [
                {
                    id: "aaa",
                    poster_id: "aaab",
                    content: "This is a blatant shitpost...",
                    created_date: "1"
                }
            ]
        }
        return new Response(null, { status: 200 });
    }

}

interface PostCreateAccountRequest {
    username: string
    password: string
}

interface PostLoginRequest {
    username: string
    password: string
}

interface PostLoginResponse {
    auth_token: string
}

interface PostNewThreadRequest {
    auth_token: string
    name: string
    contents: string
}

interface PostNewCommentRequest {
    auth_token: string
    parent_thread_id: string
    contents: string
}

interface GetThreadsResponse {
    threads: Array<Thread>
}

interface GetThreadResponse {
    comments: Array<Comment>
}

interface Thread {
    id: string
    poster_id: string
    title: string
    created_date: string
}

interface Comment {
    id: string
    poster_id: string
    content: string
    created_date: string
}
