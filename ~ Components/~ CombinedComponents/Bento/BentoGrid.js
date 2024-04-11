/**
 * `BentoGrid` is a component that replicates a "bento" Grid style
 *  It uses Tailwind CSS for styling.
 *
 * @component
 * @param {string} props.className - Additional CSS classes that the user wants to add.
 * @param {React.Node} props.children - The child elements to be rendered within the grid.
 *
 * @example
 * <BentoGrid className="my-custom-class">
 *   <div>Grid Item 1</div>
 *   <div>Grid Item 2</div>
 * </BentoGrid>
 *
 * @returns A `div` element with the grid layout and the child elements.
 */

const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={`grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </div>
    );
};

export default BentoGrid;

