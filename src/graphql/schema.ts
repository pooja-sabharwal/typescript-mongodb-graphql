import { gql } from 'apollo-server';

export default gql`
type Query {
    login(email: String!, password: String!) :AuthenticateResponse!
}

type Mutation {
    register(email: String!, password: String!) :AuthenticateResponse!
}

type AuthenticateResponse {
    ltoken: String!
}
`;