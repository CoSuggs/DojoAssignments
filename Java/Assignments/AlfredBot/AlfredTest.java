public class AlfredTest{
    public static void main(String[] args){
        
        AlfredQuotes alfredBot = new AlfredQuotes();

        String testGreeting = alfredBot.basicGreeting();
        String testGuestGreeting = alfredBot.guestGreeting("Beth Kane", "afternoon");
        String testDateAnouncemnet = alfredBot.dateAnnouncement();
        String testAlexis = alfredBot.respondBeforeAlexis("Alexis, answer the phone.");
        String testAlfred = alfredBot.respondBeforeAlexis( "Alfred, where is Robin?");
        String notAlfredNotAlexis = alfredBot.respondBeforeAlexis( "Will someone answer the phone");

        System.out.println(testGreeting);
        System.out.println(testGuestGreeting);
        System.out.println(testDateAnouncemnet);
        System.out.println(testAlexis);
        System.out.println(testAlfred);
        System.out.println(notAlfredNotAlexis);
    }
}