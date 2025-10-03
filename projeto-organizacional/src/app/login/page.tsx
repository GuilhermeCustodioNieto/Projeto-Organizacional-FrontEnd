'use client';
import { useRouter } from "next/navigation";
import  Styles  from '@/app/styles/LoginRegister.module.css';
import Input from '@/components/input/Input';
import Button from "@/components/button/Button";

export default function Login() {

    const router = useRouter();

    return ( 
        <div className={Styles.pageContainer}>
            <div className={`${Styles.cardContainer} ${Styles["bg-custom"]}`}>
                <div className={Styles.formContainer}>
                    <div className={Styles.org}>
                        <h1 className={Styles.title}>Login</h1>
                    </div>
                    <div>

                        <div className={Styles.inputs}>
                            <div>
                                <h2 className={Styles.text}>Email ou Telefone</h2>
                                <Input
                                    type="email"
                                    placeholder="exemplo@email.com"
                                    width="w-96"
                                    height="h-12"
                                />
                            </div>
                            <div>
                                <h2 className={Styles.text}>Digite sua Senha</h2>
                                <Input
                                    type="password"
                                    placeholder="**********"
                                    width="w-96"
                                    height="h-12"
                                />
                                <p className={Styles.link}>Esqueceu sua Senha? <a className={Styles.linkA} href='http://localhost:3000/register'>Clique Aqui</a></p>
                            </div>
                            
                            
                            
                        </div>
                        <div className={Styles.inputs}>
                            <Button width="95%" height="h-12">Acessar sua Conta</Button>
                            <p className={Styles.link}>Não Possui uma Conta? <a className={Styles.linkA} href='http://localhost:3000/register'>Clique Aqui</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}