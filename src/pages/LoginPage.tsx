import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Body } from "../components/Body";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { useLoginService } from "../services/impl/LoginServiceImpl";

const LoginPage = () => {
    // service
    const loginService = useLoginService();
    const history = useHistory();

    // state
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <Container>
            <Body>
                <div className="flex items-center justify-center p-4">
                    <div className="text-lg">Login</div>
                </div>
                <div className="mb-4">
                    <label>username</label>
                    <input
                        className="border-2 rounded w-full h-10 px-2"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label>Password</label>
                    <div>
                        <input
                            type="password"
                            className="border-2 rounded w-full h-10 px-2"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <Button
                        title="Login"
                        onClick={() => {
                            loginService
                                .login(username, password)
                                .then(() => {
                                    history.push("/");
                                })
                                .catch((err) => {
                                    console.error(err);
                                });
                        }}
                    >
                        login
                    </Button>
                </div>
            </Body>
        </Container>
    );
};

export default LoginPage;
