export const MaxWidthWrapper = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <div className="max-w-md mx-auto">{children}</div>;
};
