export interface ICard {
    id: number,
    title: string,
    description: string,
    category: string,
    size: number[],
    price: number,
    imageUrl: string,
    designer: string
}

type meta = {
    total_items: number,
    total_pages: number,
    current_page?: number,
    per_page?: number,
    remaining_count?: number
}

export interface IResponseFetch {
    items: ICard[],
    meta: meta
}

export interface ICartItem extends ICard {
    count: number
}