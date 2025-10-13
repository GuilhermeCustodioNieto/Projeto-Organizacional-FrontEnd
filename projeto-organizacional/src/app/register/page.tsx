"use client";
import { useRouter } from "next/navigation";
import Styles from "@/app/styles/LoginRegister.module.css";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import api from "@/lib/api";

export default function Register() {
  const [completeName, setCompleteName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  function handleLogin() {
    api
      .post("/user/register", {
        completeName: completeName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((response) => {
        console.log(response);

        Swal.fire({
          title: "Cadastro concluído!",
          text: "Agora Começa sua Jornada",
          icon: "success",
          background: "#1d1d1d",
          color: "#f5f5f5",
          confirmButtonText: "Ir para Login",
          confirmButtonColor: "#634BB0",
          iconColor: "#834CEB",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/login");
          }
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Erro no Cadastro",
          text: error.response?.data?.message || "Ocorreu um erro inesperado.",
          icon: "error",
          background: "#1d1d1d",
          color: "#f5f5f5",
          confirmButtonText: "Tentar Novamente",
          confirmButtonColor: "#634BB0",
          iconColor: "#E74C3C",
        });
      });
  }

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
                <h2 className={Styles.text}>Nome completo:</h2>
                <Input
                  type="text"
                  placeholder="Seu Nome"
                  width="w-96"
                  height="h-12"
                  onChange={(e) => setCompleteName(e.target.value)}
                />
              </div>
              <div>
                <h2 className={Styles.text}>Email ou Telefone</h2>
                <Input
                  type="email"
                  placeholder="exemplo@email.com"
                  width="w-96"
                  height="h-12"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <h2 className={Styles.text}>Digite sua Senha</h2>
                <Input
                  type="password"
                  placeholder="**********"
                  width="w-96"
                  height="h-12"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <h2 className={Styles.text}>Confirme sua Senha</h2>
                <Input
                  type="password"
                  placeholder="**********"
                  width="w-96"
                  height="h-12"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className={Styles.inputs}>
              <Button width="95%" height="h-12" onClick={handleLogin}>
                Criar a Conta
              </Button>
              <p className={Styles.link}>
                Já Possui uma Conta?{" "}
                <a className={Styles.linkA} href="http://localhost:3000/login">
                  Clique Aqui
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
