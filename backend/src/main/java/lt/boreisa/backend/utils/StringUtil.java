package lt.boreisa.backend.utils;

public class StringUtil {
    public static boolean areCharsDigits(String value) {
        return value.matches("\\d+");
    }
}
