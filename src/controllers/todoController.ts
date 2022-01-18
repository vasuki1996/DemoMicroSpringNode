import { HttpMethod } from 'microspringnode/constants/HttpMethods'
import { HttpStatusCode } from 'microspringnode/constants/HttpStatus'
import { MimeType } from 'microspringnode/constants/MimeTypes'
import { Controller } from 'microspringnode/decorators/Controller'
import { RequestMapping } from 'microspringnode/decorators/RequestMapping'
import { TODOItem } from '../dto/TODOItem';
import { getAllItems, createItem} from '../services/services';

@Controller()
export class TodoController {

    basePath = "/api/v1"

    @RequestMapping("/items", HttpMethod.GET, {
        operationId: "getAllItems",
        summary: "Get all TODO Items",
        tags: ["TODO"],
        responseBody: {
            produces: MimeType.JSON,
            responses:[
                {
                    status: HttpStatusCode.OK,
                    responseSchemaDefName: "GetAllItemsResponse",
                    description: "Success"
                }
            ]
        }
    })
    getAllItems = async () => {
        const items = await getAllItems();
        return items;
    }

    @RequestMapping("/item", HttpMethod.POST, {
        operationId: "craeteItem",
        summary: "Create TODO Item",
        tags: ["TODO"],
        responseBody: {
            produces: MimeType.JSON,
            responses:[
                {
                    status: HttpStatusCode.OK,
                    responseSchemaDefName: "TODOItem",
                    description: "Success"
                }
            ]
        },
        requestBody: {
            consumes: MimeType.JSON,
            requestSchemaDefName: "TODOItem",
            description: "Request Payload to create a item"
        }
    })
    createItem: Function = (body: TODOItem) => {
        const item = createItem(body);
    }

}