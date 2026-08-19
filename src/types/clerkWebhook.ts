export default interface clerkWebhook {
    type: string;
      data: {
        id: string;
        first_name: string | null;
        last_name: string | null;
        email_addresses: {
          email_address: string;
        }
}
}