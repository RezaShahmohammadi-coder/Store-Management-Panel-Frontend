"use client"
import { error, log } from "console"
import styles from "../Css/Card.module.css"
import {usedeleteProduct} from"../UseQuery/UseDeletProduct"
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";


interface ActionButtonProps {
    ProoId: string;
      onError: (message: string) => void;

}

export default function ActionButton({ ProoId,onError }: ActionButtonProps) {

    const{mutate,isPending,isError,error}=usedeleteProduct()
    console.log("isError:", isError);
console.log("error:", error);


    function onDelete() {
    mutate(ProoId, {
      onError: (error) => {
        onError(error.message);
      },
    });
  }

    function onEdit() {
        console.log("delete");

    }

    const router=useRouter()

    return (
        <>
            <button
            
                type="button"
                className={`${styles.actionButton} ${styles.edit}`}
                aria-label="Edit product"
                onClick={() => router.push(`Products/Update/${ProoId}`)}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>

                <span>Edit</span>
            </button>

            <button
                type="button"
                className={`${styles.actionButton} ${styles.delete}`}
                onClick={onDelete}
                aria-label="Delete product"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="M19 6l-1 14H6L5 6" />
                    <path d="M10 11v5" />
                    <path d="M14 11v5" />
                </svg>

                <span>Delete</span>
            </button>

        </>
    )
}