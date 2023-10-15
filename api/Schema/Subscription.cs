namespace Schema;

public class Subscription
{
    [Subscribe]
    public string MessageChanged([EventMessage] string newMessage) => newMessage;
}
