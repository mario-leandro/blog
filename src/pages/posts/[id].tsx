import "@/styles/globals.sass";
import "@/styles/mainPostId.sass";
import Header from "@/components/subfaces/header";
import Footer from "@/components/subfaces/footer";
import { useRouter } from "next/router";
import database from "@/database/database";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface Database {
    id: number;
    title: string;
    question: string;
    data: string;
    author: string;
}

export default function PostId() {
    const [ post, setPost ] = useState<Database[]>([]);
    const router = useRouter();
    const { id } = router.query as { id: string };

    const fetchArrayDB = async () => {
        try {
            const post = database.filter((i) => i.id === Number(id));
            setPost(post);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if(id) fetchArrayDB();
    }, [id]);

    return (
        <>
            <Header />
            <main>
                <div className="main-container">
                    <div className="main-content">
                        { post.map((post) => (
                        <div className="card" key={ post.id }>
                            <div className="card-initialInfo">
                                <div className="card-title-author">
                                    <div className="card-title">
                                        <h1>{ post.title }</h1>
                                    </div>

                                    <div className="card-author">
                                        <p>{ post.author }</p>
                                    </div>
                                </div>

                                <div className="card-data">
                                    <p>{ post.data }</p>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="card-description">
                                    <p>{ post.question }</p>
                                </div>
                            </div>

                            <div className="card-footer">
                                <div className="card-footer-title">
                                    <h2>Respostas</h2>
                                </div>

                                <form id="comments">
                                    <div className="commentData">
                                        <div className="commentData-icon">
                                            <FontAwesomeIcon icon={faUser} style={{color: "#593de6",}} />
                                        </div>

                                        <div className="commentData-input">
                                            <input type="text" placeholder="Digite sua resposta aqui!" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />    
        </>
    )
}