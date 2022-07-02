// Extra icons

import { defineComponent } from "vue";

export const MenuFoldLineRightIcon = defineComponent({
    setup() {
        return () => (
            <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 6H20M12 12H20M4 18H20M4 6L8 9L4 12"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const MenuFoldLineLeftIcon = defineComponent({
    setup() {
        return () => (
            <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 6H20M12 12H20M4 18H20M8 6L4 9L8 12"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const DashboardIcon = defineComponent({
    setup() {
        return () => (
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M5.5 12.5C5.22386 12.5 5 12.7239 5 13C5 13.2761 5.22386 13.5 5.5 13.5H7C7.27614 13.5 7.5 13.2761 7.5 13C7.5 12.7239 7.27614 12.5 7 12.5H5.5Z" />
                <path d="M6.93935 7.93935C7.13462 7.74409 7.4512 7.74409 7.64646 7.93935L8.70712 9.00001C8.90238 9.19528 8.90238 9.51186 8.70712 9.70712C8.51186 9.90238 8.19528 9.90238 8.00001 9.70712L6.93935 8.64646C6.74409 8.4512 6.74409 8.13462 6.93935 7.93935Z" />
                <path d="M17 12.5C16.7239 12.5 16.5 12.7239 16.5 13C16.5 13.2761 16.7239 13.5 17 13.5H18.5C18.7761 13.5 19 13.2761 19 13C19 12.7239 18.7761 12.5 18.5 12.5H17Z" />
                <path d="M15.4394 10.0606C15.2441 9.86538 15.2441 9.5488 15.4394 9.35354L16.5 8.29288C16.6953 8.09762 17.0119 8.09762 17.2071 8.29288C17.4024 8.48814 17.4024 8.80472 17.2071 8.99999L16.1465 10.0606C15.9512 10.2559 15.6346 10.2559 15.4394 10.0606Z" />
                <path d="M12.9661 12.741C12.9882 12.8236 13 12.9104 13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.0896 12 12.1764 12.0118 12.259 12.0339L13 11.2929C13.1953 11.0976 13.5119 11.0976 13.7071 11.2929C13.9024 11.4881 13.9024 11.8047 13.7071 12L12.9661 12.741Z" />
                <path d="M12 8.5C11.7239 8.5 11.5 8.27614 11.5 8V6.5C11.5 6.22386 11.7239 6 12 6C12.2761 6 12.5 6.22386 12.5 6.5V8C12.5 8.27614 12.2761 8.5 12 8.5Z" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3C9.34784 3 6.8043 4.05357 4.92893 5.92893C3.05357 7.8043 2 10.3478 2 13C2 14.3132 2.25866 15.6136 2.7612 16.8268C3.26375 18.0401 4.00035 19.1425 4.92893 20.0711C5.11647 20.2586 5.37082 20.364 5.63604 20.364H18.364C18.6292 20.364 18.8835 20.2586 19.0711 20.0711C19.9997 19.1425 20.7362 18.0401 21.2388 16.8268C21.7413 15.6136 22 14.3132 22 13C22 10.3478 20.9464 7.8043 19.0711 5.92893C17.1957 4.05357 14.6522 3 12 3ZM6.34315 7.34315C7.84344 5.84285 9.87827 5 12 5C14.1217 5 16.1566 5.84285 17.6569 7.34315C19.1571 8.84344 20 10.8783 20 13C20 14.0506 19.7931 15.0909 19.391 16.0615C19.0406 16.9075 18.5479 17.6861 17.9353 18.364H6.06469C5.45205 17.6861 4.95938 16.9075 4.60896 16.0615C4.20693 15.0909 4 14.0506 4 13C4 10.8783 4.84285 8.84344 6.34315 7.34315Z"
                />
            </svg>
        );
    },
});

export const ArrowsInnerIcon = defineComponent({
    name: "ArrowInnerIcon",
    setup() {
        return () => (
            <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4 4L9 9M9 9V5M9 9H5M20 4L15 9M15 9V5M15 9H19M4 20L9 15M9 15H5M9 15V19M20 20L15 15M15 15H19M15 15V19"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const EmptyCircleIcon = defineComponent({
    name: "EmptyCircleIcon",
    setup() {
        return () => (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const SecureIcon = defineComponent({
    name: "SecureIcon",
    setup() {
        return () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        );
    },
});

export const CogIcon = defineComponent({
    name: "CogIcon",
    setup() {
        return () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        );
    },
});

export const WalletsIcon = defineComponent({
    name: "WalletsIcon",
    setup() {
        return () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
            </svg>
        );
    },
});

export const TransactionIcon = defineComponent({
    name: "TransactionIcon",
    setup() {
        return () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
        );
    },
});

export const TradesIcon = defineComponent({
    name: "TradesIcon",
    setup() {
        return () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
            </svg>
        );
    },
});

export const BookIcon = defineComponent({
    name: "BookIcon",
    setup() {
        return () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
            </svg>
        );
    },
});

export const SupportIcon = defineComponent({
    name: "SupportIcon",
    setup() {
        return () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        );
    },
});

export const AnalysisIcon = defineComponent({
    name: "AnalysisIcon",
    setup() {
        return () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
            </svg>
        );
    },
});

export const PlusIcon = defineComponent({
    name: "PlusIcon",
    setup() {
        return () => (
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        );
    },
});

export const ChartPieIcon = defineComponent({
    name: "ChartPieIcon",
    setup() {
        return () => (
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        );
    },
});
