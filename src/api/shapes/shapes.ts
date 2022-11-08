// import { apiClient } from 'core/api-client';

import { IShape, IData } from "./types";
// import { useId } from "react-id-generator";

// export async function fetchShapes(params: {
//     size: number;
//     page: number;
//   }) {
//     return (
//       await apiClient.get<PaginationContent<ListRawRow>>('v1/web/mobileusers', {
//         params: {
//           search: params.filtered[0].value,
//           page: params.page,
//         },
//       })
//     ).data;
//   }


const data: IData[] = [
	{
		"form": "circle",
		"color": "blue",
		"dark": true
	},
	{
		"form": "square",
		"color": "yellow",
		"dark": false
	},	
	{
		"form": "square",
		"color": "yellow",
		"dark": false
	},	
	{
		"form": "circle",
		"color": "red",
		"dark": false
	},

	{
		"form": "circle",
		"color": "blue",
		"dark": true
	},
	{
		"form": "circle",
		"color": "green",
		"dark": false
	},	
	{
		"form": "circle",
		"color": "yellow",
		"dark": true
	},	
	{
		"form": "square",
		"color": "green",
		"dark": false
	},

	{
		"form": "square",
		"color": "yellow",
		"dark": false
	},
	{
		"form": "circle",
		"color": "green",
		"dark": true
	},	
	{
		"form": "square",
		"color": "blue",
		"dark": true
	},	
	{
		"form": "square",
		"color": "blue",
		"dark": false
	},	

	{
		"form": "square",
		"color": "blue",
		"dark": false
	},
	{
		"form": "triangle",
		"color": "red",
		"dark": true
	},	
	{
		"form": "circa",
		"color": "blue",
		"dark": false
	},	
	{
		"form": "square",
		"color": "blue",
		"dark": true
	},

	{
		"form": "circle",
		"color": "blue",
		"dark": true
	},
	{
		"form": "square",
		"color": "greed",
		"dark": true
	},	
	{
		"form": "square",
		"color": "yellow",
		"dark": true
	},	
	{
		"form": "circle",
		"color": "green",
		"dark": false
	},

	{
		"form": "square",
		"color": "blue",
		"dark": false
	},
	{
		"form": "circle",
		"color": "yellow",
		"dark": true
	},	
	{
		"form": "square",
		"color": "green",
		"dark": true
	},	
	{
		"form": "square",
		"color": "yellow",
		"dark": false
	}
]
export const shapes = data.map((i: IData, index)=> {
    // const [htmlId] = useId();
    // console.log('shapes',htmlId);
    
    const t: IShape =  {...i, id: index}
    return t
})