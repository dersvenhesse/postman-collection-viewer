import { ItemGroup as PostmanItemGroup } from 'postman-collection'

export function isItemGroup(obj) {
    return PostmanItemGroup.isItemGroup(obj)
}