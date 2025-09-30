'use client';
import  Styles  from '@/app/register/page.module.css';
import Input from '@/components/input/Input';

export default function Register() {
    return ( 
        <div className={Styles.pageContainer}>
            <div className={`${Styles.cardContainer} ${Styles["bg-custom"]}`}>
                <div className={Styles.formContainer}>
                    <div className={Styles.org}>
                        <h1 className={Styles.title}>Cadastro</h1>
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
                            </div>
                            <div>
                                <h2 className={Styles.text}>Confirme sua Senha</h2>
                                <Input
                                    type="password"
                                    placeholder="**********"
                                    width="w-96"
                                    height="h-12"
                                />
                            </div>
                            
                            
                        </div>
                        <div className={Styles.inputs}>
                            <h2>futurop botao</h2>
                            <p className={Styles.link}>Já Possui uma Conta? <a className={Styles.linkA} href='http://localhost:3000'>Clique Aqui</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}