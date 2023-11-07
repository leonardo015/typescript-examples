type User = {
	sessionId: string;
	name: string;
};

type Guest = Omit<User, "name">;
