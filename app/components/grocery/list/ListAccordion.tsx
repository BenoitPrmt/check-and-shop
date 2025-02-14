import {useGrocery} from "~/hooks/useGrocery";
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "~/components/ui/accordion";
import {COLORS} from "~/constants/GroceryListColor";

const ListAccordion = () => {
    const { groceryLists } = useGrocery();

    return (
        <Accordion type="single" collapsible className="w-full">
            {groceryLists.map((list, index) => (
                <AccordionItem key={index} value={`${list.id}`}>
                    <AccordionTrigger>
                        <div className="flex flex-row gap-4 items-center">
                            <h3 className={`font-bold text-xl hover:no-underline cursor-pointer ${COLORS[list.color] ? COLORS[list.color].text : ''}`}>{list.name}</h3>
                            <p className="text-gray-500">{list.items?.length} article{(list.items?.length || 0) > 1 ? 's' : ''}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>{list.name}</p>
                        <p>{list.color}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default ListAccordion;