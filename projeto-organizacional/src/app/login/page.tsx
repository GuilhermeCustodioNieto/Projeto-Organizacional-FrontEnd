'use client';
import  Styles  from '@/app/login/page.module.css';
import Input from '@/components/input/Input';

export default function Login() {
    return ( 
        <div className={Styles.pageContainer}>
            <div className={`${Styles.cardContainer} ${Styles["bg-custom"]}`}>
                <div className={Styles.formContainer}>
                    <div className={Styles.org}>
                        <h1 className={Styles.title}>Login</h1>
                    </div>

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
                        </div>

                        <div className={Styles.inputs}>
                            <p className={Styles.link}>Esqueceu a Senha? <a className={Styles.linkA} href='http://localhost:3000'>Clique Aqui</a></p>
                        </div>
                    </div>
                    <div className={Styles.org1}>
                        <h2>futurop botao</h2>
                        <p className={Styles.link}>Não Possui uma Conta? <a className={Styles.linkA} href='http://localhost:3000'>Clique Aqui</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}