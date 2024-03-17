const feedbackData = [
    { name: "john", phnumber: "1234567890", email: "john@example.com", userFeedback: "Great service!" },
    { name: "alice", phnumber: "9876543210", email: "alice@example.com", userFeedback: "Very helpful staff." },
    { name: "bob", phnumber: "5554443333", email: "bob@example.com", userFeedback: "Fast delivery!" },
    { name: "emma", phnumber: "1112223333", email: "emma@example.com", userFeedback: "Excellent product quality." },
    { name: "david", phnumber: "9998887777", email: "david@example.com", userFeedback: "Could improve packaging." },
    { name: "sarah", phnumber: "7778889999", email: "sarah@example.com", userFeedback: "Responsive customer service." },
    { name: "michael", phnumber: "4445556666", email: "michael@example.com", userFeedback: "Easy checkout process." },
    { name: "olivia", phnumber: "1231231234", email: "olivia@example.com", userFeedback: "Prompt shipping." },
    { name: "william", phnumber: "9879879876", email: "william@example.com", userFeedback: "Clear website layout." },
    { name: "sam", phnumber: "1112223333", email: "example22@gmail.com", userFeedback: "Nice product." },
    { name: "laura", phnumber: "4445556666", email: "laura@example.com", userFeedback: "Fast shipping!" },
    { name: "alex", phnumber: "7778889999", email: "alex@example.com", userFeedback: "Responsive support team." },
    { name: "natalie", phnumber: "1231231234", email: "natalie@example.com", userFeedback: "Quality could be better." },
    { name: "jacob", phnumber: "9879879876", email: "jacob@example.com", userFeedback: "Impressed with the service." },
    { name: "hannah", phnumber: "9876238923", email: "hannah@example.com", userFeedback: "User-friendly website." },
    { name: "ethan", phnumber: "1234567890", email: "ethan@example.com", userFeedback: "Great experience overall." },
    { name: "mia", phnumber: "9876543210", email: "mia@example.com", userFeedback: "Satisfied with the product." },
    { name: "noah", phnumber: "5554443333", email: "noah@example.com", userFeedback: "Highly recommend!" },
    { name: "ava", phnumber: "9998887777", email: "ava@example.com", userFeedback: "Excellent customer service." }
];
localStorage.setItem('feedback', JSON.stringify(feedbackData));