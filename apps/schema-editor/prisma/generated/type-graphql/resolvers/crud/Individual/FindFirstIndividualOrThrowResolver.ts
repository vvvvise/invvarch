import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIndividualOrThrowArgs } from "./args/FindFirstIndividualOrThrowArgs";
import { Individual } from "../../../models/Individual";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Individual)
export class FindFirstIndividualOrThrowResolver {
  @TypeGraphQL.Query(_returns => Individual, {
    nullable: true
  })
  async findFirstIndividualOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIndividualOrThrowArgs): Promise<Individual | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
