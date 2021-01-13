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
                <div>Login</div>
                <label>username</label>
                <div>
                    <input
                        className="border-2 rounded"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <label>password</label>
                    <div>
                        <input
                            className="border-2 rounded"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div>
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
