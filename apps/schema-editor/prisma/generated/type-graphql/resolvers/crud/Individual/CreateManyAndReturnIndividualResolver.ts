import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnIndividualArgs } from "./args/CreateManyAndReturnIndividualArgs";
import { Individual } from "../../../models/Individual";
import { CreateManyAndReturnIndividual } from "../../outputs/CreateManyAndReturnIndividual";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Individual)
export class CreateManyAndReturnIndividualResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIndividual], {
    nullable: false
  })
  async createManyAndReturnIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnIndividualArgs): Promise<CreateManyAndReturnIndividual[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
