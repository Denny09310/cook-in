using HotChocolate.Subscriptions;

namespace Schema;

public class Mutation
{
    [UseMutationConvention]
    public async Task<string> Message([Service] ITopicEventSender sender, string newMessage)
    {
        await sender.SendAsync(nameof(Subscription.MessageChanged), newMessage);
        return newMessage;
    }
}
