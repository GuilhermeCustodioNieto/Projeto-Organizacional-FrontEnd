'use client';
import  Styles  from '@/app/register/page.module.css';
import Input from '@/components/input/Input';

export default function Register() {
    return ( 
        <div className={Styles.pageContainer}>
            <div className={`${Styles.cardContainer} ${Styles["bg-custom"]}`}>
                <div className={Styles.formContainer}>
                    <h1 className={Styles.title}>Cadastro</h1>
                    <div>
                        <div className={Styles.inputs}>
                            <Input
                            type="email"
                            placeholder="exemplo@email.com"
                            width="w-96"
                            height="h-12"/>

                            <Input
                            type="email"
                            placeholder="exemplo@email.com"
                            width="w-96"
                            height="h-12"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}