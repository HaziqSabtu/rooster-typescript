import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
} from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
    uri: "https://api-eu-central-1.hygraph.com/v2/cl7ysisgk3yge01ug5jwpb9dp/master/upload",
    headers: {
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjQ0NTk0MTEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2w3eXNpc2drM3lnZTAxdWc1andwYjlkcC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMjBlOTg2MjUtZWIzMi00MmM4LTg3ZGQtYzQxZTQ2YTZlNzM1IiwianRpIjoiY2w4bjQ1cDZ3NGU1MTAxdGQ4NGgwNDM5MSJ9.VPK32HSfyTccUcp50B4bK70O84A1ooSmd3WvVnIkHMsD128rJdYMV39aUriXar0opZdOtjt7SbrCeGYi-hx5ZBSb3ZoJZv9_1bIwIzFw73t5fswcB1j4hyMt6oSQfp1SYjC-qiRLlNNxGBkwgo-fymZIY_OT0cotDXMubwWdgmuQnL4erm_b8q-9KaAJT4qigWqMTeeI02-Xwdq5dZH4WtCgk_ToxL1PWyKWdbfK8WR5M_3i3vGItRyv77R0Tb23qwjO0YCAPfc3gAd7TqhERf15Fn1Ffkp9m3kMtDZjq5VxWvlfDzQiFX8U-4CmJzGWInIp-w_8no1ntbRQPyEqQLSv5LNSaTCOLZQ2uyOyoXByEsmxMLCGCgIubjZ6MQhFX7TE42lRYt_p7oyfpMRJRMtsuxuoBzIF_-qHVbV7nw5XyVwLbjIEwf5EQSI8w1wwIasw0arhztzoN8itOUciVVyxMu_N2kTJ_0mV4JNe4d1Nvy3so7vvn2EfylE49eTODQVMFLwfoOOY7mGJ7nwAfBMeFwYsFiUborwZkNlxXFlMM65y3s1JrKvgo5OUyPrZzc_OVUM8Tz5Pl_FSm-4cAgc2T5A1o3MJN4lDDB3hF2LtvHaomyQb2eKB7-v2filQF14IwRPDq21wGwnZf9E9d-72kJTIPCxu_IIYeBXPtsw`,
    },
});

export const apolloClient = new ApolloClient({
    uri: "https://api-eu-central-1.hygraph.com/v2/cl7ysisgk3yge01ug5jwpb9dp/master",
    cache: new InMemoryCache(),
    link: restLink,
});
