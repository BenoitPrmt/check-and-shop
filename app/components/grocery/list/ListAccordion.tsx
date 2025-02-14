import {useGrocery} from "~/hooks/useGrocery";
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "~/components/ui/accordion";
import {COLORS} from "~/constants/GroceryListColor";
import GroceryList from "~/components/grocery/list/item/GroceryList";

const ListAccordion = () => {
    const { groceryLists } = useGrocery();

    return (
        <Accordion type="single" collapsible className="w-full">
            {groceryLists.map((list, index) => (
                <AccordionItem key={index} value={`${list.id}`}>
                    <AccordionTrigger className="hover:no-underline cursor-pointer">
                        <div className="flex flex-row gap-4 items-center">
                            <h3 className={`font-bold text-xl ${COLORS[list.color] ? COLORS[list.color].text : ''}`}>{list.name}</h3>
                            <p className="text-gray-500">{list.items?.length} article{(list.items?.length || 0) > 1 ? 's' : ''}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <GroceryList listId={list.id} />
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default ListAccordion;