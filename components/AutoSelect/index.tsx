'use client'
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {inspect} from "util";

export const animals = [
    {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
    {label: "Dog", value: "dog", description: "The most popular pet in the world"},
    {label: "Elephant", value: "elephant", description: "The largest land animal"},
    {label: "Lion", value: "lion", description: "The king of the jungle"},
    {label: "Tiger", value: "tiger", description: "The largest cat species"},
];


export default function AutoSelect() {

    return (
        <Autocomplete
            variant={"bordered"}
            color={"secondary"}
            defaultItems={animals}
            size={"sm"}
            placeholder=""
            className="max-w-[150px] filter"
        >
            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
        </Autocomplete>
    );
}