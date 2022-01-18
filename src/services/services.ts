import { TODO } from "../entity/TODO"
import { getRepository } from "../repository/repository"
import { Repository } from "typeorm";
import { GetAllItemsResponse } from "../dto/GetAllItemsResponse";
import { TODOItem } from "../dto/TODOItem";

const itemRepository = <Promise<Repository<TODO>>>getRepository(TODO);

export const getAllItems = async (): Promise<GetAllItemsResponse> => {
    const items = await (await itemRepository).find();
    return {
        items: items
    }

}

export const createItem = async (todoItem: TODOItem): Promise<TODO> => {
    const item = (await itemRepository).create(todoItem);
    const result = await (await itemRepository).save(item);

    return result;
}