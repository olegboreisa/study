package lt.boreisa.backend.service;

public interface ParsingService {

    /**
     * Service to parse the JSON response and convert it to the desired model class
     */

    Object parse(String url);
}
