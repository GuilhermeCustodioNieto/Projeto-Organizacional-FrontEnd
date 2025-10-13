"use client";
import { useRouter } from "next/navigation";
import Styles from "@/app/styles/LoginRegister.module.css";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios
      .post("http://localhost:4000/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);

        Swal.fire({
          title: "Login concluído!",
          text: "Bem-vindo de volta!",
          icon: "success",
          background: "#1d1d1d",
          color: "#f5f5f5",
          confirmButtonText: "Ir para a home",
          confirmButtonColor: "#634BB0",
          iconColor: "#834CEB",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/");
          }
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Erro no Login",
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
                <p className={Styles.link}>
                  Esqueceu sua Senha?{" "}
                  <a
                    className={Styles.linkA}
                    href="http://localhost:3000/register"
                  >
                    Clique Aqui
                  </a>
                </p>
              </div>
            </div>
            <div className={Styles.inputs}>
              <Button
                type="submit"
                width="95%"
                height="h-12"
                onClick={handleLogin}
              >
                Acessar sua Conta
              </Button>
              <p className={Styles.link}>
                Não Possui uma Conta?{" "}
                <a
                  className={Styles.linkA}
                  href="http://localhost:3000/register"
                >
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
