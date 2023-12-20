package com.nocountry.c15g39n.exceptionhandler;


import com.nocountry.c15g39n.exception.NoDataFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ControllerAdvisor {

    private static final String MESSAGE = "message";

    //@ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidateExceptions(MethodArgumentNotValidException ex){
        Map<String, String> errors = new HashMap<String, String>();
        ex.getBindingResult().getAllErrors().forEach((error) ->{
            String fielName = ((FieldError)error).getField();
            String message = error.getDefaultMessage();

            errors.put(fielName, message);
        });
        return  ResponseEntity.status(HttpStatus.CONFLICT).body(errors);
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleException(Exception exception) {
        System.out.println("llega Excepcion:"+exception.getClass().toString());
        String messageError = "";
        String messageException = "";
        switch (exception.getClass().toString()) {
            case "class com.nocountry.c15g39n.exception.UsuarioAprendizNoAutenticadoException":
                messageError = "mensaje";
                messageException = "El usuario aprendiz no esta autenticado.";
                break;
            case "class com.nocountry.c15g39n.exception.RutaNoExisteException":
                messageError = "mensaje";
                messageException = "La ruta no existe.";
                break;
            case "class com.nocountry.c15g39n.exception.EtapaNoExisteException":
                messageError = "mensaje";
                messageException = "La etapa no existe";
                break;
            case "class com.nocountry.c15g39n.exception.RutaUsuarioExisteException":
                messageError = "mensaje";
                messageException = "El aprendiz ha seleccionado una ruta ya escogida.";
                break;
            case "class com.nocountry.c15g39n.exception.RutasNoExistenException":
                messageError = "mensaje";
                messageException = "No existen rutas guardadas.";
                break;
            case "class com.nocountry.c15g39n.exception.UsuarioNoTieneRutasAsocidasException":
                messageError = "mensaje";
                messageException = "El aprendiz no tiene rutas asociadas.";
                break;
            case "class com.nocountry.c15g39n.exception.UsuarioNoTieneEtapaAsociadaException":
                messageError = "mensaje";
                messageException = "El aprendiz no tiene esa etapa asociada.";
                break;
            case "class com.nocountry.c15g39n.exception.UsuarioNoTieneContenidosAsociadosException":
                messageError = "mensaje";
                messageException = "El aprendiz no tiene ese contenido asociado.";
                break;
            case "class com.nocountry.c15g39n.exception.RutasIdNoEnviadoException":
                messageError = "mensaje";
                messageException = "No has enviado ningun ID de las rutas para realizar el filtro.";
                break;
            default:
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(Collections.singletonMap(exception.getClass().toString(), exception.getMessage()));

        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body(Collections.singletonMap(messageError, messageException));
    }

    @ExceptionHandler(NoDataFoundException.class)
    public ResponseEntity<Map<String, String>> handleNoDataFoundException(
            NoDataFoundException ignoredNoDataFoundException) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Collections.singletonMap(MESSAGE, ExceptionResponse.NO_DATA_FOUND.getMessage()));
    }

}