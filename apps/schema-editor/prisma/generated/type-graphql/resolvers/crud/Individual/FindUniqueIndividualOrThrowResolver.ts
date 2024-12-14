import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIndividualOrThrowArgs } from "./args/FindUniqueIndividualOrThrowArgs";
import { Individual } from "../../../models/Individual";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Individual)
export class FindUniqueIndividualOrThrowResolver {
  @TypeGraphQL.Query(_returns => Individual, {
    nullable: true
  })
  async getIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIndividualOrThrowArgs): Promise<Individual | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
