import { useEffect, useState } from "react";
import Loading from "./Loading";

const UseEffectApi = () => {
    const [githubUser, setGithubUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
            const gitHubUser = await response.json();
            setGithubUser(gitHubUser);
            setLoading(false);
        } catch (error) {
            console.log('error handling', error);
        }
    }

    useEffect(() => {
        getUsers();
    },[]);

    if (loading) {
        return <Loading />
    }

    return <>
        <h2>List of GitHub Users</h2>
        <div className="container-fluid mt-5">
            <div className="row text-center">
                {
                    githubUser.map((user) => {
                        return (
                            <>
                                 <div className="col-10 col-md-4 mt-5">
                    <div className="card p-2">
                        <div className="d-flex align-item-center">
                            <div className="image">
                                <img src={user.avatar_url } className="rounded" width="155" alt={user.avatar_url } />
                            </div>
                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 text-left" style={{color:"red"}}>{user.login}</h4><span className="textLeft">{ user.type }</span>
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                    <div className="d-flex flex-column">
                                        <span className="articles">articles</span><span className="number1">39</span>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="followers">followers</span><span className="number2">980</span>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="rating">Rating</span><span className="number3">8.9</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                            </>
                        )


                    })
                }




            </div>
        </div>
</>
}
export default UseEffectApi;