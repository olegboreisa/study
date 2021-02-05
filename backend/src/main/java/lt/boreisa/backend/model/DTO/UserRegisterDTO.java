package lt.boreisa.backend.model.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties
public class UserRegisterDTO {

    private Long id;
    private String username;
    private String password;
    private String matchPassword;
    private String country;
    private String phoneNum;

}
