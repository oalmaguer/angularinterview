'use client'; 
import Image from "next/image";
import "./style.css";
import { useState } from "react";

export default function Home() {
  const all_questions =
  [
    {
      "id": 1,
      "pregunta": "¿Qué es Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un lenguaje de programación", "isActive": false},
        {"status": true, "respuesta": "Un framework de JavaScript", "isActive": false},
        {"status": false, "respuesta": "Una base de datos", "isActive": false},
        {"status": false, "respuesta": "Una librería para aplicaciones móviles", "isActive": false}
      ]
    },
    {
      "id": 2,
      "pregunta": "¿Qué comando se utiliza para crear un nuevo proyecto en Angular?",
      "respuestas": [
        {"status": true, "respuesta": "ng new", "isActive": false},
        {"status": false, "respuesta": "ng create project", "isActive": false},
        {"status": false, "respuesta": "ng generate", "isActive": false},
        {"status": false, "respuesta": "ng init", "isActive": false}
      ]
    },
    {
      "id": 3,
      "pregunta": "¿Qué es un componente en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un controlador para la vista", "isActive": false},
        {"status": false, "respuesta": "Un módulo que maneja rutas", "isActive": false},
        {"status": true, "respuesta": "Una unidad básica de construcción de UI", "isActive": false},
        {"status": false, "respuesta": "Un servicio que gestiona datos", "isActive": false}
      ]
    },
    {
      "id": 4,
      "pregunta": "¿Qué es el decorador @Component en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un decorador para servicios", "isActive": false},
        {"status": false, "respuesta": "Un decorador para módulos", "isActive": false},
        {"status": true, "respuesta": "Un decorador para componentes", "isActive": false},
        {"status": false, "respuesta": "Un decorador para rutas", "isActive": false}
      ]
    },
    {
      "id": 5,
      "pregunta": "¿Qué archivo define la configuración del proyecto Angular?",
      "respuestas": [
        {"status": false, "respuesta": "package.json", "isActive": false},
        {"status": false, "respuesta": "angular.cli.json", "isActive": false},
        {"status": true, "respuesta": "angular.json", "isActive": false},
        {"status": false, "respuesta": "main.ts", "isActive": false}
      ]
    },
    {
      "id": 6,
      "pregunta": "¿Qué método se utiliza para enviar datos a un servidor en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "HttpClient.get()", "isActive": false},
        {"status": false, "respuesta": "HttpClient.put()", "isActive": false},
        {"status": false, "respuesta": "HttpClient.delete()", "isActive": false},
        {"status": true, "respuesta": "HttpClient.post()", "isActive": false}
      ]
    },
    {
      "id": 7,
      "pregunta": "¿Qué es la inyección de dependencias en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un patrón de diseño para componentes", "isActive": false},
        {"status": true, "respuesta": "Un patrón de diseño para gestionar dependencias", "isActive": false},
        {"status": false, "respuesta": "Un método para hacer pruebas", "isActive": false},
        {"status": false, "respuesta": "Una técnica para enlazar datos", "isActive": false}
      ]
    },
    {
      "id": 8,
      "pregunta": "¿Qué comando se utiliza para generar un componente en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "ng generate service", "isActive": false},
        {"status": false, "respuesta": "ng generate module", "isActive": false},
        {"status": false, "respuesta": "ng create component", "isActive": false},
        {"status": true, "respuesta": "ng generate component", "isActive": false}
      ]
    },
    {
      "id": 9,
      "pregunta": "¿Qué es un módulo en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Una biblioteca de funciones", "isActive": false},
        {"status": false, "respuesta": "Un archivo de configuración", "isActive": false},
        {"status": true, "respuesta": "Un contenedor de componentes y servicios", "isActive": false},
        {"status": false, "respuesta": "Un plugin para Angular", "isActive": false}
      ]
    },
    {
      "id": 10,
      "pregunta": "¿Qué es el enrutador en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un servicio para manejar datos", "isActive": false},
        {"status": false, "respuesta": "Un módulo de pruebas", "isActive": false},
        {"status": false, "respuesta": "Un decorador para componentes", "isActive": false},
        {"status": true, "respuesta": "Un módulo para gestionar la navegación", "isActive": false}
      ]
    },
    {
      "id": 11,
      "pregunta": "¿Qué es un servicio en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un componente para la vista", "isActive": false},
        {"status": false, "respuesta": "Un módulo para rutas", "isActive": false},
        {"status": true, "respuesta": "Una clase que proporciona funcionalidad compartida", "isActive": false},
        {"status": false, "respuesta": "Un decorador de dependencias", "isActive": false}
      ]
    },
    {
      "id": 12,
      "pregunta": "¿Qué es un observable en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Una forma de gestionar eventos", "isActive": false},
        {"status": false, "respuesta": "Un servicio de rutas", "isActive": false},
        {"status": true, "respuesta": "Una forma de manejar datos asíncronos", "isActive": false},
        {"status": false, "respuesta": "Un módulo de componentes", "isActive": false}
      ]
    },
    {
      "id": 13,
      "pregunta": "¿Qué es un pipe en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Una directiva para datos", "isActive": false},
        {"status": false, "respuesta": "Un servicio para la UI", "isActive": false},
        {"status": true, "respuesta": "Una función para transformar datos en plantillas", "isActive": false},
        {"status": false, "respuesta": "Un decorador para componentes", "isActive": false}
      ]
    },
    {
      "id": 14,
      "pregunta": "¿Qué es la CLI de Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Una librería de componentes", "isActive": false},
        {"status": true, "respuesta": "Una herramienta de línea de comandos para desarrollar Angular", "isActive": false},
        {"status": false, "respuesta": "Un servicio de datos", "isActive": false},
        {"status": false, "respuesta": "Un módulo de configuración", "isActive": false}
      ]
    },
    {
      "id": 15,
      "pregunta": "¿Qué es un template en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un módulo de configuración", "isActive": false},
        {"status": false, "respuesta": "Un servicio para datos", "isActive": false},
        {"status": false, "respuesta": "Un decorador para componentes", "isActive": false},
        {"status": true, "respuesta": "Una vista HTML que define la interfaz de usuario", "isActive": false}
      ]
    },
    {
      "id": 16,
      "pregunta": "¿Qué es una directiva en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un servicio para datos", "isActive": false},
        {"status": true, "respuesta": "Una clase que añade comportamiento a los elementos del DOM", "isActive": false},
        {"status": false, "respuesta": "Un módulo de configuración", "isActive": false},
        {"status": false, "respuesta": "Un componente de rutas", "isActive": false}
      ]
    },
      {
      "id": 17,
      "pregunta": "¿Qué es el archivo tsconfig.json en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un archivo de componentes", "isActive": false},
        {"status": true, "respuesta": "Un archivo de configuración de TypeScript" , "isActive": false},
        {"status": false, "respuesta": "Un archivo de servicios" , "isActive": false},
        {"status": false, "respuesta": "Un archivo de rutas" , "isActive": false}
      ]
    },
    {
      "id": 18,
      "pregunta": "¿Qué es la Ivy renderer en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un módulo de rutas", "isActive": false},
        {"status": false, "respuesta": "Un servicio para datos" , "isActive": false},
        {"status": false, "respuesta": "Un decorador de componentes" , "isActive": false},
        {"status": true, "respuesta": "El motor de renderizado de Angular" , "isActive": false}
      ]
    },
    {
      "id": 19,
      "pregunta": "¿Qué es el archivo polyfills.ts en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un archivo de configuración de componentes", "isActive": false},
        {"status": false, "respuesta": "Un archivo de servicios", "isActive": false},
        {"status": true, "respuesta": "Un archivo que proporciona compatibilidad con navegadores antiguos", "isActive": false},
        {"status": false, "respuesta": "Un archivo de rutas", "isActive": false}
      ]
    },
    {
      "id": 20,
      "pregunta": "¿Qué es un guard en Angular?",
      "respuestas": [
        {"status": false, "respuesta": "Un servicio para datos", "isActive": false},
        {"status": true, "respuesta": "Una clase que decide si se puede activar una ruta",  "isActive": false},
        {"status": false, "respuesta": "Un módulo de configuración", "isActive": false},
        {"status": false, "respuesta": "Un componente de rutas", "isActive": false}
      ]
    }
  ]
  

  const [questions, setQuestions] = useState<any[]>(all_questions);

  let idx = 0;

  const handleClick = (answer: any, questionId: number, correctId: number) => {
    console.log(answer, questionId, correctId);
    if (answer.status){
      setQuestions((prevQuestions) => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[questionId].respuestas[correctId].isActive = true;
        return updatedQuestions;
      });

    } else {
      alert('Incorrecta!!');
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="questions-container">
      {
      
      questions.map((question, index) => (
          
          <div key={index} className="question">
            <h2>{question.pregunta}</h2>
            <div className="answers">
            {question.respuestas.map((answer: any, answerIndex: any) => (
              <button className={`answer ${answer.isActive ? 'correct' : ''}`}  onClick={(() => handleClick(answer,index, answerIndex))}  key={answerIndex}>{answer.respuesta}</button>
            ))}
            </div>
      </div>
      ))}
      </div>
    </main>
  );
}
