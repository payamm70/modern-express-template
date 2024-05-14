// This is only an example file. You can safely delete it

export function getHelloMessage(
	senderName: string,
	receiverName: string,
	prefix: string = "Hello"
) {
	return `${prefix}, ${receiverName}! I am ${senderName}`;
}
