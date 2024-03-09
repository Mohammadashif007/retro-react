const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center my-10">
            <h2 className="text-4xl font-bold">{heading}</h2>
            <p className="w-[650px] mx-auto mt-2">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;
