import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
    Spinner,
    Button
} from "@nextui-org/react";
import {useAsyncList} from "@react-stately/data";
import React, {useState} from "react";

export default function ActivitiesTable() {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    let list = useAsyncList({
        async load({signal, cursor}) {
            if (cursor) {
                setPage((prev) => prev + 1);
            }
            const res = await fetch(cursor || "https://swapi.py4e.com/api/people/?search=", {signal});
            let json = await res.json();

            if (!cursor) {
                setIsLoading(false);
            }

            return {
                items: json.results,
                cursor: json.next,
            };
        },
    });

    const hasMore = page < 25;

    return (
        <Table
            isStriped
            shadow={'none'}
            dir={"ltr"}
            isHeaderSticky
            bottomContent={
                hasMore && !isLoading ? (
                    <div className="flex w-full justify-center">
                        <Button isDisabled={list.isLoading} variant="flat" onPress={list.loadMore}>
                            {list.isLoading && <Spinner color="secondary" size="sm"/>}
                            Load More
                        </Button>
                    </div>
                ) : null
            }
            classNames={{
                base: "h-[100%] overflow-scroll mt-3",
                wrapper: "p-0 rounded-lg",
                table: "min-h-[300px] shadow-none",
            }}
        >
            <TableHeader>
                <TableColumn key="name" className={'text-right'}>نوع تراکنش</TableColumn>
                <TableColumn key="name" className={'text-right'}>نوع تراکنش</TableColumn>
                <TableColumn key="name" className={'text-right'}>نوع تراکنش</TableColumn>
                <TableColumn key="name" className={'text-right'}>نوع تراکنش</TableColumn>
            </TableHeader>
            <TableBody
                dir={"rtl"}
                isLoading={isLoading}
                items={list.items}
                loadingContent={<Spinner label="Loading..."/>}
            >
                {(item) => (
                    <TableRow key={0}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
