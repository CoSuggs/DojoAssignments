import java.util.Date;

public class AlfredQuotes {
    public String basicGreeting() {
        return "Hello, lovely to see you. Isn't it nice out today?";
    }

    public String guestGreeting(String name, String dayPeriod) {
        return String.format("Good %s, %s. Welcome to Wayne manor.", dayPeriod, name);
    }

    public String dateAnnouncement() {
        return String.format("It is currently %s", new Date());
    }

    public String respondBeforeAlexis(String phrase) {
        if(phrase.indexOf("Alexis") > -1) {
            return "Right away, sir. She certainly isn't sophisticated enough for that.";
        }
        if (phrase.indexOf("Alfred") > -1) {
            return "At your service. As you wish, naturally.";
        }
        return "Right. And with that I shall retire.";
    }
}